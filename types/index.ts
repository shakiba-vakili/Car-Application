import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  // it could be optional
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * 🔹 What is MouseEventHandler<HTMLButtonElement>?
 *
 * It means: this is a function that handles mouse events (like clicks)
 * on a <button> element in React with TypeScript.
 *
 * Example:
 * const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
 *   console.log("Button clicked!", e.currentTarget);
 * };
 *
 * It's better than just using () => void because:
 * - You get autocomplete for the event object
 * - TypeScript will catch mistakes if the function is used on the wrong element
 *
 */
