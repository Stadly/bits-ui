import type { OnChangeFn } from "$lib/internal/types.js";

export type PinInputProps = {
	value?: string;

	onValueChange?: OnChangeFn<string>;

	/**
	 * The number of digits in the pin input.
	 */
	maxLength: number;

	/**
	 * The alignment of the text within the inputs.
	 */
	textAlign?: "left" | "center" | "right";

	/**
	 * A callback that is called when the pin input is complete.
	 */
	onComplete?: (...args: unknown[]) => void;

	pushPasswordManagerStrategy?: "increase-width" | "none";

	containerClassName?: string;

	noScriptCSSFallback?: string | null;
};
