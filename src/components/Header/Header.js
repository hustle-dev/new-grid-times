import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { QUERIES } from '../../constants'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Logo from '../Logo'
import Button from '../Button'

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <MobileActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </MobileActionGroup>
          <MobileActionGroup>
            <button>
              <User size={24} />
            </button>
          </MobileActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeContainer>
          <SubscribeButton>Subscribe</SubscribeButton>
          <AlreadySubscribe>Already a subscriber?</AlreadySubscribe>
        </SubscribeContainer>
      </MainHeader>
    </header>
  )
}

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`

const MobileActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`

const DesktopActionGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 24px;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
  }
`

const SubscribeContainer = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`

const SubscribeButton = styled.button`
  padding: 11px 24px;
  text-transform: uppercase;
  border-radius: 4px;
  background: var(--color-primary);
  font-family: var(--font-family-sans-serif);
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.125rem;
  color: var(--color-white);
`

const AlreadySubscribe = styled.a`
  font-family: var(--font-family-serif);
  font-style: italic;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: var(--color-gray-900);
  text-decoration: underline;
`

export default Header
