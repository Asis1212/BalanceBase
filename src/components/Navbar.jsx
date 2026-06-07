import styled from 'styled-components'

function Navbar({activePage, onPageChange}) {
    const left = { val: "history", label: "היסטוריה", icon: "📋" };
    const right = { val: "dashboard", label: "דשבורד", icon: "📊" };

    return (
        <Container>
            <NavButton
                className={right.val === activePage ? "active" : ""}
                onClick={() => onPageChange(right.val)}
            >
                <BtnIcon>{right.icon}</BtnIcon>
                <BtnLabel>{right.label}</BtnLabel>
            </NavButton>

            <AddButtonWrapper>
                <AddButton
                    className={activePage === "add" ? "active" : ""}
                    onClick={() => onPageChange("add")}
                >
                    +
                </AddButton>
                <BtnLabel style={{ color: activePage === "add" ? "#d4500a" : "#aaa", marginTop: 4 }}>הוסף</BtnLabel>
            </AddButtonWrapper>

            <NavButton
                className={left.val === activePage ? "active" : ""}
                onClick={() => onPageChange(left.val)}
            >
                <BtnIcon>{left.icon}</BtnIcon>
                <BtnLabel>{left.label}</BtnLabel>
            </NavButton>
        </Container>
    )
}

export default Navbar;

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid #f0e8e0;
    display: flex;
    align-items: center;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.08);
    padding-bottom: env(safe-area-inset-bottom);
    height: 64px;
`;

const NavButton = styled.button`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    border: none;
    padding-block: 10px;
    cursor: pointer;
    font-family: inherit;
    background: white;

    &.active span {
        color: #d4500a;
        font-weight: 600;
    }
`;

const AddButtonWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -18px;
`;

const AddButton = styled.button`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #d4500a, #e8722a);
    color: white;
    font-size: 28px;
    font-weight: 300;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(212, 80, 10, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.15s, box-shadow 0.15s;
    line-height: 1;

    &:active {
        transform: scale(0.93);
        box-shadow: 0 2px 8px rgba(212, 80, 10, 0.3);
    }

    &.active {
        box-shadow: 0 0 0 4px rgba(212, 80, 10, 0.2), 0 4px 16px rgba(212, 80, 10, 0.45);
    }
`;

const BtnIcon = styled.span`
    font-size: 20px;
    color: #aaa;
    transition: color 0.2s;
`;

const BtnLabel = styled.span`
    font-size: 11px;
    font-weight: 400;
    color: #aaa;
    transition: color 0.2s;
`;
