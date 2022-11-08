import React from "react";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterItem>
        <div>
          <ul>
            <div>Vinola</div>
            <li>Kontaktai</li>
            <li>Parduotuvių Tinklas</li>
            <li>Parteneriai</li>
            <li>Prekiauti per Vinola</li>
            <li>Prekių Ženklai</li>
            <li>Karjera</li>
          </ul>
        </div>
        <div>
          <ul>
            <div>DUK</div>
            <li>Pristatymas</li>
            <li>Atsiskaitymas</li>
            <li>Pirkimo - pardavimo taisyklės</li>
            <li>Slapukų politika</li>
            <li>Apsipirkimo gidas</li>
          </ul>
        </div>
        <div>
          <ul>
            <div>Pirkėjo paskyra</div>
            <li>Užsakymo informacija</li>
          </ul>
        </div>
        <div>
          <ul>
            <div>Susisiekime</div>
            <li>+370 661 05555 </li>
            <div>Sekite mus</div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png"
                alt="instagram"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt="facebook"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin"
              />
            </div>
          </ul>
        </div>
      </S.FooterItem>
    </S.FooterContainer>
  );
};

export default Footer;
