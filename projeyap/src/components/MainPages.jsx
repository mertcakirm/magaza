import NavBar from "./nav/NavBar";
import "./MainPages.css";
import Datam from "./mainpagedata/data";
import { Link } from "react-router-dom";

const MainPages = () => {
  const data = Datam();
  const datam = data.dataphotos;

  return (
    <div>
      <NavBar />
      <div className="cinsiyet">
        <Link to="/man">
          <img
            src="https://cdn.dsmcdn.com/ty1016/pimWidgetApi/mobile_20231016064256_MontBanner.jpg"
            alt="man"
          />
        </Link>
        <Link to="/woman">
          <img
            src="https://cdn.dsmcdn.com/ty995/pimWidgetApi/mobile_20230905143100_thumbnail2330941KadinMobile202309051401.jpg"
            alt="man"
          />
        </Link>
      </div>
      <div className="kategoriler">
        <div className="title">
          <h2>Hızlı Kategoriler</h2><hr />
        </div>
        <div className="url">
  {datam.map((category) => (
    <Link to={category.link} key={category.kategori}>
      <img src={category.url} alt={category.kategori} />
    </Link>
  ))}
</div>
      </div>
      <div className="prgf">
        <hr />
        <h2>Hakkımızda</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        cupiditate nam recusandae exceptBuri fugiat culpa voluptates ducimus
        officia eum nemo magnam dolore commodi doloribus, dolor tenetur aut,
        maiores itaque hic quibusdam nobis pariatur modi alias optio quas! Iste
        obcaecati voluptas sequi rem tempora adipisci amet quos saepe odit at,
        laboriosam pariatur maxime delectus illo a laudantium nisi nemo cum.
        Debitis modi reiciendis corporis atque impedit id accusantium. Eius
        fugit, reprehenderit quos velit consequatur officiis harum ipsum
        voluptate nisi nemo aut expedita unde consectetur excepturi corporis
        saepe enim fugiat totam sint esse illum nesciunt. Sit sed, id cumque
        sapiente laudantium magni.
      </div>
    </div>
  );
  
};

export default MainPages;
