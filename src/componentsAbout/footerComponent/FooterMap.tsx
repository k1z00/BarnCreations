import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import React, { useEffect, useState } from "react";
import '../StyleAbout/footer.scss'

interface FooterMapProps {
  center?: [number, number];
  zoom?: number;
}

const FooterMap: React.FC<FooterMapProps> = ({
  center = [53.201908, 50.141365],
  zoom = 12,
}) => {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const mapState = {
    center: center,
    zoom: zoom,
  };

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const response = await fetch(
          "https://geocode-maps.yandex.ru/1.x/?apikey=9328768f-f1e0-41e6-ae45-c661336cf15f&geocode=Москва&format=json"
        );
        const data = await response.json();

        if (data.response.GeoObjectCollection.featureMember.length) {
          const point =
            data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
              " "
            );
          setCoordinates([parseFloat(point[1]), parseFloat(point[0])]);
        }
      } catch (error) {
        console.error("Ошибка получения координат:", error);
      }
    };

    getCoordinates();
  }, []);

  return (
    <YMaps query={{ apikey: "9328768f-f1e0-41e6-ae45-c661336cf15f" }}>
      <Map className="map" defaultState={mapState}>
        {coordinates && (
          <Placemark
            geometry={coordinates}
            properties={{
              hintContent: "Cамара!",
              balloonContent: "Аэродромная улица, 47А",
            }}
          />
        )}
      </Map>
    </YMaps>
  );
};

export default FooterMap;
