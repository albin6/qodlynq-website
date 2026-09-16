"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CustomSelectProps {
  id: string;
  name: string;
  options: string[];
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export function CustomSelect({
  id,
  name,
  options,
  placeholder = "Select an option",
  className,
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [dropdownDirection, setDropdownDirection] = useState<"down" | "up">("down");
  const [dropdownMaxHeight, setDropdownMaxHeight] = useState<number>(240);

  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  // Handle clicking outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle page resize by closing dropdown to recalculate properly next open
  useEffect(() => {
    function handleResize() {
      if (isOpen) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener("resize", handleResize);
    }
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Scroll focused item into view
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listboxRef.current) {
      const optionElement = listboxRef.current.children[focusedIndex] as HTMLElement;
      if (optionElement) {
        // Simple scroll into view logic to prevent cutoff
        const listbox = listboxRef.current;
        const optionTop = optionElement.offsetTop;
        const optionBottom = optionTop + optionElement.clientHeight;
        const listboxScrollTop = listbox.scrollTop;
        const listboxScrollBottom = listboxScrollTop + listbox.clientHeight;

        if (optionTop < listboxScrollTop) {
          listbox.scrollTop = optionTop;
        } else if (optionBottom > listboxScrollBottom) {
          listbox.scrollTop = optionBottom - listbox.clientHeight;
        }
      }
    }
  }, [focusedIndex, isOpen]);

  const toggleDropdown = () => {
    if (!isOpen) {
      const index = selectedOption ? options.indexOf(selectedOption) : 0;
      setFocusedIndex(index !== -1 ? index : 0);
      
      // Calculate viewport space to determine direction
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        
        // Desired max height for the dropdown panel
        const desiredHeight = 240; 
        const margin = 16; // Margin from screen edge

        // Default to down, unless spaceBelow is insufficient AND spaceAbove is larger
        if (spaceBelow < desiredHeight + margin && spaceAbove > spaceBelow) {
          setDropdownDirection("up");
          setDropdownMaxHeight(Math.min(desiredHeight, spaceAbove - margin));
        } else {
          setDropdownDirection("down");
          setDropdownMaxHeight(Math.min(desiredHeight, spaceBelow - margin));
        }
      }
    }
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        toggleDropdown();
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          handleSelect(options[focusedIndex]);
        }
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full outline-none", className)}
      onKeyDown={handleKeyDown}
    >
      {/* Hidden input to store value for FormData and handle basic required validation */}
      <input type="text" className="sr-only" name={name} value={selectedOption} id={id} required={required} onChange={() => {}} tabIndex={-1} />

      {/* Select Button */}
      <div
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        tabIndex={0}
        onClick={toggleDropdown}
        className={cn(
          "w-full bg-surface-container-lowest/80 backdrop-blur-md border rounded-2xl px-5 py-4 font-body-md text-primary focus:outline-none transition-colors shadow-sm cursor-pointer flex justify-between items-center group",
          isOpen ? "border-primary/50" : "border-outline-variant/30 focus:border-primary/50 hover:border-outline-variant/60",
          !selectedOption && "text-outline"
        )}
      >
        <span className="block truncate">
          {selectedOption || placeholder}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="material-symbols-outlined text-on-surface-variant pointer-events-none"
        >
          expand_more
        </motion.span>
      </div>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: dropdownDirection === "down" ? -4 : 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: dropdownDirection === "down" ? -4 : 4 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
               [dropdownDirection === "down" ? "top" : "bottom"]: "calc(100% + 8px)"
            }}
            className="absolute z-50 w-full bg-surface-container-lowest/95 backdrop-blur-xl border border-outline-variant/30 rounded-2xl shadow-xl overflow-hidden"
          >
            <ul
              id={`${id}-listbox`}
              role="listbox"
              ref={listboxRef}
              style={{ maxHeight: dropdownMaxHeight }}
              className="overflow-y-auto py-2 scrollbar-thin outline-none"
              tabIndex={-1}
            >
              {options.map((option, index) => (
                <li
                  key={option}
                  role="option"
                  aria-selected={selectedOption === option}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  className={cn(
                    "px-5 py-3 font-body-md cursor-pointer flex items-center justify-between transition-colors",
                    focusedIndex === index
                      ? "bg-primary/5 text-primary"
                      : "text-on-surface-variant",
                    selectedOption === option ? "text-primary font-medium" : ""
                  )}
                >
                  <span className="truncate">{option}</span>
                  {selectedOption === option && (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
