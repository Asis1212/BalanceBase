import styled from "styled-components";

function Header({cards, selectedMonth, setSelectedMonth}) {
  const getLastYearMonths = () => {
    const monthList = [];
    for (let i = 0; i <= 11; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      monthList.push(
        new Intl.DateTimeFormat("he-IL", {
          month: "long",
          year: "numeric",
        }).format(date),
      );
    }
    return monthList;
  }

  const monthsList = getLastYearMonths();

  return (
    <HeaderContainer>
      <LeftBubble />
      <RightBubble />
      <HeaderDiv>
        <div className="title">
          <span>תקציב משפחתי</span>
          <span className="current-time">{selectedMonth}</span>
        </div>
        <select className="custom-select" onChange={(e) => setSelectedMonth(e.target.value)}>
          {monthsList.map((month, index) => (
            <option key={index}>{month}</option>
          ))}
        </select>
      </HeaderDiv>
      <BoxWrapper>
        {cards.map((item, index) => (
          <div className="box" key={index}>
            <div>{item.icon}</div>
            <div style={{ color: item.color }}>{item.val} ₪</div>
            <div>{item.label}</div>
          </div>
        ))}
      </BoxWrapper>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
font-size: 15px;
color: #fff;
background: linear-gradient(
  135deg,
  rgb(212, 80, 10) 0%,
  rgb(232, 114, 42) 100%
  );
  padding: 24px 20px 32px;
  border-radius: 0px 0px 32px 32px;
  box-shadow: rgba(212, 80, 10, 0.3) 0px 8px 32px;
  position: relative;
  overflow: hidden;
`;

const LeftBubble = styled.div`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 160px;
  height: 160px;
  background:rgba(255,255,255,0.06);
  border-radius: 50%;
`;

const RightBubble = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background:rgba(255,255,255,0.06);
  border-radius: 50%;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;

  .title {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .current-time {
      font-size: 12px;
    }
  }

  .custom-select {
    height: 25px;
    padding-inline: 5px;
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 10px;
    color: white;
    outline: none;
  }
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  .box {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    padding: 12px 10px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
