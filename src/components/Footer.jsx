import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <div>jeong</div>
          <div>@jeong</div>
        </h2>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/" rel="noreferrer noopener">sign up</a>
            </div>
            <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              <li>
                <a href="/" rel="noreferrer noopener">github</a>
                <em>깃헙에 들어오시면 모든 소스를 볼 수 있습니다.</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          &copy; 2023 Jeong<br />
          이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  )
}

export default Footer