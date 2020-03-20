import styled from 'styled-components';

export const PanierContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 30px 15px 15px 15px;
`;

export const ProduitsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ProduitPanierContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const ProduitPanier = styled.div`
    @mixin all-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 500px;

    #livre {
        height: 150px;
        width: 100px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-left: 20px;

        #title {
            font-size: 25px;
            line-height: 25px;
            color: #757575;
            text-align: left;
            text-decoration: none;

            &:hover {
                color: #2394C5;
            }
        }

        & > p {
            font-size: 25px;
            line-height: 25px;
            color: #757575;
            text-align: left;
        }

        #quantity-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 35px;
            margin: 15px 0;

            .plus {
                border-radius: 0 10px 10px 0;
            }

            .moins {
                border-radius: 10px 0 0 10px;
            }

            .plusmoins {
                font-size: 30px;
                line-height: 30px;
                color: #757575;
                width: 35px;
                height: 100%;
                border: 1px solid #D5D5D5;
                transition: all 0.2s ease;

                &:hover {
                    background-color: #2B9BCC;
                    color: #ffffff;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    border: 1px solid #2B9BCC;
                }
            }

            #quantity {
                width: 35px;
                height: 100%;
                font-size: 22px;
                line-height: 35px;
                color: #757575;
                border-top: 1px solid #D5D5D5;
                border-bottom: 1px solid #D5D5D5;
            }
        }
    }
`;

export const Bar = styled.div`
    height: 1px;
    width: 100%;
    margin: 20px 0;
    background-color: #ECECEC;
`;

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 500px;

    & > p {
        font-size: 20px;
        line-height: 25px;
        color: #757575;
    }

    #total {
        font-size: 30px;
        line-height: 35px;
        margin: 20px 0;
        color: #2B9BCC;
    }

    #commande {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 20px 0;
        padding: 0 15px;
        height: 45px;
        border-radius: 5px;
        background-color: #2B9BCC;
        font-size: 20px;
        line-height: 25px;
        color: #ffffff;
        transition: all 0.2s ease;
        border-width: 0px;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        outline: none;
        box-shadow: 0px 5px 15px #75C6E9;

        &:hover {
            background-color: #2394C5;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: none;
            transform: scale(0.97);
        }
`;