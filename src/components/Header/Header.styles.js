import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 20rem;
  height: 2.5rem;
  padding: 2.5rem 2rem;
  background-color: var(--color-black-dark);

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 3px solid var(--primary);

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 2rem;
  }
`;

export const Button = styled.button`
  display: none;
  background-color: var(--color-black-dark);

  padding: 0.5rem 2rem;
  background-color: #1a1a1a;
  border: 1px solid var(--white);
  border-radius: 5px;

  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem;

  @media (min-width: 1024px) {
    display: block;
    justify-content: space-between;
    background-color: var(--color-black-dark);
  }
`;

export const Img = styled.img`
  width: 10rem;
  height: 2.5rem;
`;
