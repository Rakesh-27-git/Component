interface VideoProps {
  src: string;
  variant?: "fullscreen" | "box";
  border?: boolean;
}

const Video: React.FC<VideoProps> = ({
  src,
  variant = "fullscreen",
  border = false,
}) => {
  return (
    <div className={`relative h-screen w-full `}>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          border
            ? "border-4 border-gray-700 ring-1 ring-gray-400 rounded-lg"
            : ""
        } ${variant === "fullscreen" ? "w-[750px]" : "h-60"}`}
      >
        <iframe
          className="aspect-video w-full h-full rounded-lg"
          title="YouTube video player"
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
