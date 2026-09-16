import styled from "styled-components";
import iconImg from "../assets/icon.png";

function Header({ cards, onProfileClick }) {
  const balance = cards[2];
  const isPositive = balance.val >= 0;

  return (
    <HeaderContainer>
      <GlowOrb $positive={isPositive} />

      <HeaderTop>
        <LogoGroup>
          <LogoIcon>
            <img src={iconImg} alt="Finio" width="34" height="34" style={{ borderRadius: 10 }} />
          </LogoIcon>
          <TitleGroup>
            <AppName>Finio</AppName>
            <SubTitle>ניהול תקציב משפחתי</SubTitle>
          </TitleGroup>
        </LogoGroup>
        <ProfileBtn onClick={onProfileClick}>👤</ProfileBtn>
      </HeaderTop>

      <BalanceSection>
        <BalanceLabel>מאזן חודשי</BalanceLabel>
        <BalanceValue $positive={isPositive}>
          {isPositive ? "+" : ""}{balance.val.toLocaleString("he-IL")} ₪
        </BalanceValue>
      </BalanceSection>

      <StatsRow>
        <StatChip>
          <StatIcon>📈</StatIcon>
          <StatContent>
            <StatAmount style={{ color: "#22d3a5" }}>{cards[0].val.toLocaleString("he-IL")} ₪</StatAmount>
            <StatLabel>הכנסות</StatLabel>
          </StatContent>
        </StatChip>
        <StatDivider />
        <StatChip>
          <StatIcon>📉</StatIcon>
          <StatContent>
            <StatAmount style={{ color: "#f472b6" }}>{cards[1].val.toLocaleString("he-IL")} ₪</StatAmount>
            <StatLabel>הוצאות</StatLabel>
          </StatContent>
        </StatChip>
      </StatsRow>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background: linear-gradient(160deg, #161b27 0%, #0d1117 100%);
  padding: 52px 20px 24px;
  border-radius: 0 0 32px 32px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(99, 102, 241, 0.15);
`;

const GlowOrb = styled.div`
  position: absolute;
  top: -60px;
  right: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: ${({ $positive }) =>
    $positive
      ? "radial-gradient(circle, rgba(34,211,165,0.13) 0%, transparent 70%)"
      : "radial-gradient(circle, rgba(244,114,182,0.13) 0%, transparent 70%)"};
  pointer-events: none;
`;

const ProfileBtn = styled.button`
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.08);
  color: #f0f4ff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:active {
    background: rgba(99,102,241,0.2);
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoIcon = styled.div`
  filter: drop-shadow(0 4px 12px rgba(99,102,241,0.5));
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const AppName = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #f0f4ff;
  letter-spacing: 0.5px;
  line-height: 1.1;
`;

const SubTitle = styled.div`
  font-size: 11px;
  color: #8b9dc3;
  font-weight: 400;
  letter-spacing: 0.2px;
`;

const BalanceSection = styled.div`
  text-align: center;
  padding: 4px 0 20px;
  position: relative;
  z-index: 1;
`;

const BalanceLabel = styled.div`
  font-size: 12px;
  color: #8b9dc3;
  font-weight: 500;
  margin-bottom: 6px;
  letter-spacing: 0.3px;
`;

const BalanceValue = styled.div`
  font-size: 44px;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
  color: ${({ $positive }) => $positive ? "#22d3a5" : "#f472b6"};
  text-shadow: 0 0 40px ${({ $positive }) =>
    $positive ? "rgba(34,211,165,0.35)" : "rgba(244,114,182,0.35)"};
`;

const StatsRow = styled.div`
  display: flex;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const StatChip = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
`;

const StatDivider = styled.div`
  width: 1px;
  background: rgba(255, 255, 255, 0.06);
  align-self: stretch;
`;

const StatIcon = styled.div`
  font-size: 20px;
  flex-shrink: 0;
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StatAmount = styled.div`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const StatLabel = styled.div`
  font-size: 11px;
  color: #8b9dc3;
  font-weight: 400;
`;
