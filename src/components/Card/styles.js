import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.333%;
  }
`

export const Content = styled.div`
  background: #ddd;
  color: #000;
  border-radius: 12px;
  box-shadow: 0 0 1px transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 320px;
  margin: 0.5rem 1rem;
  padding: 1rem;
`

export const Name = styled.h2`
`

export const Image = styled.img`
  max-width: 160px;
  max-height: 160px;
  margin: 1rem;
`
