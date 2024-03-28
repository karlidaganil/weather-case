import { useParams } from "react-router-dom";
import useGetWeather from "../../hooks/useGetWeather";

import "./style.css";

const Detail = () => {
  const { city } = useParams();
  const { weather, isloading, error } = useGetWeather(city);

  const { date, day, degree, description, humidity, icon, max, min, night } =
    weather;

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="table-container">
      <h1>{city.toUpperCase()}</h1>
      <table>
        <tr>
          <th>Hadise</th>
          <th>Sıcaklık</th>
          <th>Tarih</th>
          <th>Gün</th>
          <th>Açıklama</th>
          <th>Nem</th>
          <th>Gün İçinde En Yüksek</th>
          <th>Gün İçinde En Düşük</th>
          <th>Akşam</th>
        </tr>
        <tr>
          <td>
            <img src={icon} width={40} height={40} />
          </td>
          <td>{degree}°</td>
          <td>{date}</td>
          <td>{day}</td>
          <td>{description}</td>
          <td>{humidity}°</td>
          <td>{max}°</td>
          <td>{min}°</td>
          <td>{night}°</td>
        </tr>
      </table>
    </div>
  );
};

export default Detail;
