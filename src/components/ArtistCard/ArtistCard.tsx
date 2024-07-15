import "./ArtistCard.scss";

interface ArtistCardProps {
  artist: ArtistDto;
}

export interface ArtistDto {
  counter: number;
  name: string;
  totalSales: number;
  avatar: string;
}

export const ArtistCard = (props: ArtistCardProps) => {
  const { totalSales, counter, name } = props.artist;

  return (
    <div className="artist-card">
      <div className="number">{counter}</div>
      <img src="${avatar}" alt="" />
      <div className="name">{name}</div>
      <div className="total-sales">
        <span className="">Total Sales: </span>
        {totalSales} ETH
      </div>
    </div>
  );
};
