import styled from "styled-components";

export const Main = styled.main`
  padding-top: 100px;
  display: flex;
  column-gap: 5%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;

  h1 {
    font-size: 5rem;
    margin-bottom: 8px;
  }
  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 16px;
  }
  p {
    font-size: 1rem;
    line-height: 160%;
    margin-bottom: 24px;
  }

  button {
    width: 50%;
  }

  button + button {
    margin-left: 20px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Section = styled.section`
  position: relative;
  width: 100%;

  h1 {
    font-size: 3rem;
    font-family: Caprasimo;
    line-height: 120%;
    color: var(--red_200);
  }

  #section-home {
    position: absolute;
    width: 100%;
    top: -110px;
    z-index: -1;
  }

  #section-about {
    position: absolute;
    width: 100%;
  }

  p {
    font-size: 1rem;
    line-height: 160%;
    margin-bottom: 24px;
  }

  #graphics {
    margin-top: 150px;
    width: 100%;
  }

  @media (max-width: 1024px) {

    #section-about, #section-home, #graphics {
      visibility: hidden;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 5%;
  padding-top: 25%;

  h1 {
    margin-bottom: 30px;
  }

  #DCU {
    width: 30%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: 0;
    column-gap: 0%;

    #DCU {
      width: 100%;
    }
  }

`;

export const Content = styled.div`
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (max-width: 1024px) {
    width: 85%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    margin-top: 12px;
    color: var(--text);
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }

  p {
    color: var(--text);
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    line-height: 160%;
  }

  /* #name_orbis {
        width: 70%;
    } */
`;

export const Stages = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const AboutContainer = styled.div`
  margin-top: 120px;
  display: flex;
  column-gap: 20%;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: var(--red_200);
    font-size: 3rem;
    font-family: "Caprasimo", cursive;
  }

  #name_orbis_about {
    width: 100%;
  }

  p {
    width: 50%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    column-gap: 0;
    p {
      margin-top: 12px;
      width: 100%;
    }
  }
`;

export const IdealizerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 20%;
  flex-direction: row;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    flex-direction: column;
    column-gap: 0;
  }
`;

export const Idealizer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h4 {
    font-size: 2.5rem;
    color: var(--red_200);
    font-weight: normal;
    font-family: "Caprasimo", cursive;
    margin-bottom: 16px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const DevsContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const GridDevs = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
