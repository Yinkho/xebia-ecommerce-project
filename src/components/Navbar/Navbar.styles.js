import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
`;

export const SearchAndLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 0 20px;
`;

export const SearchContainer = styled.div`
  position: relative;
  height: 44px;
  width: 300px;
  display: flex;
  align-items: center;
`;

export const SVG = styled.img`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;

export const SearchInput = styled.input`
  position: relative;
  height: 40px;
  width: 300px;
  left: 0;
  border: 2px solid #B5B5B5;
  border-radius: 100px;
  padding: 0 0 0 15px;
  font-family: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 17px;
  outline: none;
  font-weight: 300;
`;

export const PanierLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > p {
    font-size: 17px;
    color: #3B3B3B;
    margin-right: 10px;
    transition: all 0.2s ease;
  }

  &:hover {
    & > p {
      color: #2B9BCC;
      transition: all 0.2s ease;
    }
  }
`;

export const PanierLogoAndNotifContainer = styled.div`
  position: relative;
  height: 20px;
  width: 40px;

  & > p {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    height: 25px;
    width: 25px;
    padding: 0 1px 2px 1px;
    font-size: 17px;
    line-height: 22px;
    font-weight: 700;
    color: #ffffff;
    background-color: #2B9BCC;
    border-radius: 100px;
    left: 12px;
    bottom: 2px;
    transition: all 0.2s ease;
  }

  & > img {
    z-index: 0;
    position: absolute;
    width: 20px;
    left: 0;
  }
`;