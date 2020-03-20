import styled from 'styled-components';

export const LivreCard = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 5px 5px 10px #EFEFEF;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 15px;
  transition: all 0.2s ease;
  width: 200px;
  overflow: hidden;
  animation: appear 0.2s ease;

  @keyframes appear {
    from { transform: translateX(30px); }
    to { transform: translateX(0px); }
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease;

    #livre-container {
        
      .synopsis-container {
        display: block;
      }
    }
  }

  #livre-container {
    position: relative;
    width: 200px;
    height: 293px;

    .livre {
        position: absolute;
        width: 200px;
        height: 293px;
        opacity: 0.98;
        margin: 0;
        left: 0;
        right: 0;
    }

    .synopsis-container {
        display: none;
        background-color: black;
        opacity: 0.8;
        overflow: hidden;

        #synopsis {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            & > p {
                color: #ffffff;
                font-size: 15px;
                padding: 15px;
            }

            & > a {
                color: #ffffff;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }

  }

  & > #titre {
    margin: 10px 0;
    padding: 0 25px;
    text-decoration: none;
    color: #3B3B3B;

    &:hover {
      color: #2B9BCC;
    }
  }

  & > #price {
    margin: 0 0 10px 0;
    font-size: 20px;
    padding: 0 25px;
  }

  & > button {
    margin: 0 0 20px 0;
    width: 80%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #9A9A9A;
    background-color: transparent;
    font-size: 17px;
    color: #787878;
    transition: all 0.2s ease;
    outline: none;

    &:hover {
      border-width: 0px;
      background-color: #2B9BCC;
      color: #ffffff;
      cursor: pointer;
      transition: all 0.2s ease;
    }
  }
`;

export const LinkTitle = styled.div`
  width: 200px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ activeLink }) => activeLink ? '#373737' : '#c7c7c7'};
  font-weight: ${({ activeLink }) => activeLink ? '700' : '400'};

  &:hover {
    transition: all 0.2s ease;
    color: #373737;
  }
`;