type ArrowCircleProps = {
  className?: string;
};

// Circular outward-arrow affordance used on project cards (signature detail).
export function ArrowCircle({ className }: ArrowCircleProps): React.ReactElement {
  return (
    <span
      className={`flex size-12 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 ${className ?? ""}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 12L12 4M12 4H5M12 4V11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
