import React from 'react';
import './ArtistCard.scss';

interface ArtistCardProps {
  artist: ArtistDto;
}

export interface ArtistDto {
  counter: number;
  name: string;
  totalSales: number;
  avatar: string;
}

export function ArtistCard({ artist }: ArtistCardProps): React.JSX.Element {
  const { totalSales, counter, name, avatar } = artist;

  return (
    <div className="artist-card">
      <div className="number">{counter}</div>
      <img src={avatar} alt="" />
      <div className="name">{name}</div>
      <div className="total-sales">
        <span className="">Total Sales: </span>
        {totalSales} ETH
      </div>
    </div>
  );
}
