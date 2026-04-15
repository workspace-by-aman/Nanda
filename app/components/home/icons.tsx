import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 21c5 0 11-3 14-11 1-2.67 1-5 1-7-2 0-4.33 0-7 1-8 3-11 9-11 14" />
      <path d="M5 21c0-6 4-10 9-13" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l7 3v6c0 4.97-3.05 8.85-7 10-3.95-1.15-7-5.03-7-10V6l7-3Z" />
      <path d="m9.5 12 1.7 1.7L14.8 10" />
    </BaseIcon>
  );
}

export function BasketIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 10h14l-1.5 9h-11Z" />
      <path d="M8 10 12 4l4 6" />
    </BaseIcon>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s-7-4.35-9-9.15C1.69 8.32 3.36 5 6.8 5c2.06 0 3.27 1.16 4.2 2.46C11.93 6.16 13.14 5 15.2 5 18.64 5 20.31 8.32 21 11.85 19 16.65 12 21 12 21Z" />
    </BaseIcon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 2.78 5.63L21 9.54l-4.5 4.38 1.06 6.18L12 17.17 6.44 20.1l1.06-6.18L3 9.54l6.22-.91Z" />
    </BaseIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.61 2.61a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.47-1.26a2 2 0 0 1 2.11-.45c.84.28 1.71.49 2.61.61A2 2 0 0 1 22 16.92Z" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </BaseIcon>
  );
}
