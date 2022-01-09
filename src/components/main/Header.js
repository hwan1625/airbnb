import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { ReactComponent as Airbnb } from '../../assets/airbnb_icon.svg'
import { ReactComponent as Airbnb2 } from '../../assets/airbnb-letter_icon.svg'
import { ReactComponent as Language } from '../../assets/language_icon.svg';
import { ReactComponent as Profile } from '../../assets/profile_icon.svg';
import { ReactComponent as ProfileMenu } from '../../assets/profile-menu_icon.svg';
import Search from './header/Search';

const HeaderBlock = styled.div`
  .header {
    height: 80px;
    display: flex;
    color: #fff;
    padding: 0 16px 40px;

    .header_left {
      flex: 1;
      margin: auto 0;
    }

    .header_center {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: center;
      margin: auto 0;
      span {
        position: relative;
        color: #fff;
        font-size: 16px;
        padding: 10px 12px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &::after {
          content: "";
          width: 0px;
          border-bottom: 2px solid #ccc;
          padding-top: 10px;
          position: absolute;
          top: 30px;
          left: 50%;
          tranformX: -50%;
        }   
        &:hover {
          color: #ccc;
          &::after {
            width: 4px;
            left: 47.5%;
            transition: all 100ms ease-in;
          }
        }
      }
    }

    .header_right {
      flex: 1;
      display: flex;
      justify-content: right;
      margin: auto 0;
      height: 42px;
      .behost {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        font-size: 14px;
        padding: 12px;
        border-radius: 22px;
        height: 100%;
        &:hover {
          background-color: #262626;
        }
      }
      .languages {
        padding: 12px;
        margin-right: 5px;
        &:hover {
          background-color: #262626;
          border-radius: 22px;
        }
      }
      .profile {
        display: flex;
        justify-content: space-between;
        padding: 5px 5px 5px 12px;
        border: 1px solid #ddd;
        border-radius: 22px;
        background-color: #fff;
        width: 77px;
        svg:first-child {
          margin: auto 0;
        }
      }
    }
  }
  
  @media screen and (max-width:1127px) {
    .header {
      padding: 0 80px;
      .header_center {
        span {
          font-size: 14px;
        }
      }
    }
  }
`;

const Header = () => {
  const isFirst = useMediaQuery({ query: "(min-width:1128px)" });
  const isSecond = useMediaQuery({ query: "(min-width:950px) and (max-width:1127px)" });
  const isThird = useMediaQuery({ query: "(min-width:744px) and (max-width:949px)" });
  const isMobile = useMediaQuery({ query: "(max-width:743px)" });
  const [search, setSearch] = useState("stays");

  const onClickStays = (e) => {
    setSearch("stays");
  };
  const onClickExperience = () => {
    setSearch("experiences");
  };

  return (
    <HeaderBlock>
      <header className="header">
        <div className="header_left">
          <Link to="/">
            {isFirst ? <Airbnb2 width="102" height="32" fill="#fff" /> : <Airbnb width="102" height="32" fill="#fff" />}
          </Link>
        </div>
        <form className="header_center">
          <span onClick={onClickStays}>숙소</span>
          <span onClick={onClickExperience}>체험</span>
          <NavLink to="">
            <span>온라인 체험</span>
          </NavLink>
          <Search search={search} />
        </form>
        <div className="header_right">
          <NavLink to="" className="behost">호스트 되기</NavLink>
          <button className="languages">
            <Language fill="#fff" />
          </button>
          <button className="profile">
            <ProfileMenu fill="#595959" />
            <Profile width="30" height="30" fill="#717171" />
          </button>

        </div>
      </header>
    </HeaderBlock>
  );
};

export default Header;