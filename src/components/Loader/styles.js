import styled from 'styled-components'

export const Container = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wheel = styled.div`
  animation: spin 1s infinite linear;
  border: 2px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #fff;
  border-radius: 50%;
  margin-bottom: 10px;
  width: 200px;
  height: 200px;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export const Text = styled.div`
  color: #fff;
  font-family: arial, sans-serif;

  @keyframes load {
    0% {
      content: 'Loading';
    }
    33% {
      content: 'Loading.';
    }
    67% {
      content: 'Loading..';
    }
    100% {
      content: 'Loading...';
    }
  }
`
