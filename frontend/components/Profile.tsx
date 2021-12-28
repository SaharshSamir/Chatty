import { JSXElementConstructor, ReactElement } from "react";

// type Props = ReactElement & {
// 	size: string;
// };

interface Props extends React.SVGAttributes<SVGElement> {
	size: string;
}

export function GreenDp({ size }: Props): JSX.Element {
	return (
		<div
			className="rounded-full bg-green-400"
			style={{ height: size, width: size }}
		></div>
	);
}

export function BlueDp({ size }: Props): JSX.Element {
	return (
		<div
			className="rounded-full bg-blue-400"
			style={{ height: size, width: size }}
		></div>
	);
}

export function PinkDp({ size }: Props): JSX.Element {
	return (
		<div
			className="rounded-full bg-pink-400"
			style={{ height: size, width: size }}
		></div>
	);
}

export function OrangeDp({ size }: Props): JSX.Element {
	return (
		<div
			className="rounded-full bg-orange-400"
			style={{ height: size, width: size }}
		></div>
	);
}
