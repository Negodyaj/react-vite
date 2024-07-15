import { ArtistCard } from "../../../../components/ArtistCard/ArtistCard";
import "./Artists.scss";

export const Artists = () => {
  const artists = [
    {
      avatar:
        "https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200",
      name: "Keepitreal",
      totalSales: getRandomNumber(),
    },
    {
      avatar:
        "https://cdn.theatlantic.com/thumbor/d8lh_KAZuOgBYslMOP4T0iu9Fks=/0x62:2000x1187/1600x900/media/img/mt/2018/03/AP_325360162607/original.jpg",
      name: "DigiLab",
      totalSales: getRandomNumber(),
    },
    {
      avatar:
        "https://media.4-paws.org/a/5/3/7/a537f08d227326121b80790ba54036498668c9c8/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.jpg",
      name: "GravityOne",
      totalSales: getRandomNumber(),
    },
    {
      avatar:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/02/USAT/71425480007-getty-images-1498838344.jpg?crop=1060,1413,x530,y0",
      name: "Juanie",
      totalSales: getRandomNumber(),
    },
    {
      avatar:
        "https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k",
      name: "BlueWhale",
      totalSales: getRandomNumber(),
    },
    {
      avatar:
        "https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg",
      name: "mr fox",
      totalSales: getRandomNumber(),
    },
  ];
  function getRandomNumber(): number {
    return Math.round(Math.random() * 10000) / 100;
  }

  return (
    <div className="container">
      <div className="artists-container">
        {artists.map((artist, index) => (
          <ArtistCard
            key={`artist-${index}`}
            artist={{ ...artist, counter: index + 1 }}
          />
        ))}
      </div>
    </div>
  );
};
