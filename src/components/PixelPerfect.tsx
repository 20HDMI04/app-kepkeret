interface PixelPerfectProps {
    width?: number;
    src?: string;
    border?: number;
    borderColor?: string;
}
export default function PixelPerfect(props: PixelPerfectProps) {
    return <>
    <div className="pixel-perfect">
      <img src={props.src} alt="Pixel Perfect Overlay" style={{
        width: `${props.width}px`,
        border: `${props.border}px solid ${props.borderColor}`
      }} />
    </div>
    </>;
}