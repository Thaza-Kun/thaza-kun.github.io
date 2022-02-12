export default function YouTube({ id }) {
  return (
    <iframe
      width="100%"
      className="aspect-video w-full"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  )
}
