import React, { useEffect, useState } from 'react';
import { ArtistCard } from '../../../../components/ArtistCard/ArtistCard';
import './Artists.scss';
import { UserDto } from '../../../../models/UserDto';

function getRandomNumber(): number {
  return Math.round(Math.random() * 10000) / 100;
}

export function Artists(): React.JSX.Element {
  const [artists, setArtists] = useState<UserDto[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users: UserDto[]) => {
        console.log('sending artists to state');
        const avatars = [
          'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
          'https://cdn.theatlantic.com/thumbor/d8lh_KAZuOgBYslMOP4T0iu9Fks=/0x62:2000x1187/1600x900/media/img/mt/2018/03/AP_325360162607/original.jpg',
          'https://media.4-paws.org/a/5/3/7/a537f08d227326121b80790ba54036498668c9c8/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.jpg',
        ];
        const newArtists = users.map((user, index: number) => ({
          id: user.id,
          name: user.name,
          avatar: avatars[index],
          totalSales: getRandomNumber(),
        }));
        setArtists(newArtists);
      });
  }, []);

  return (
    <div className="container">
      <div className="artists-container">
        {artists.map((artist, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ArtistCard key={`artist-${index}`} artist={{ ...artist, counter: index + 1 }} />
        ))}
      </div>
    </div>
  );
}
