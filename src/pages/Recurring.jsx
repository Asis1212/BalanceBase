import styled from "styled-components";

function Recurring({ recurringTemplates, setActivityPage, categories, profile, onDeleteTemplate }) {
  const p1Name = profile?.personOneName ?? "אלעד";
  const p2Name = profile?.personTwoName ?? "נויה";

  const personLabel = (val) =>
    val === "personOne" ? p1Name : val === "personTwo" ? p2Name : `${p1Name} · ${p2Name}`;

  const getCat = (id) => categories?.find((c) => c.id === id);

  const incomeTemplates  = recurringTemplates.filter((t) => t.type === "income");
  const expenseTemplates = recurringTemplates.filter((t) => t.type === "expense");

  const renderList = (list) =>
    list.map((t) => {
      const cat = getCat(t.category);
      return (
        <Row key={t.id}>
          <RowLeft>
            <Emoji>{cat?.emoji ?? "🔄"}</Emoji>
            <RowInfo>
              <RowTitle>{cat?.label ?? t.category}</RowTitle>
              <RowSub>{personLabel(t.person)}{t.description ? ` • ${t.description}` : ""}</RowSub>
            </RowInfo>
          </RowLeft>
          <RowRight>
            <Amount $type={t.type}>
              {t.type === "expense" ? "-" : "+"}{Number(t.amount).toLocaleString("he-IL")} ₪
            </Amount>
            <Actions>
              <ActionBtn onClick={() => setActivityPage({ page: "edit-recurring", tx: t })}>✎</ActionBtn>
              <ActionBtn $danger onClick={() => onDeleteTemplate(t.id)}>🗑</ActionBtn>
            </Actions>
          </RowRight>
        </Row>
      );
    });

  return (
    <Page>
      <PageHeader>
        <PageTitle>הוראות קבע</PageTitle>
        <AddBtn onClick={() => setActivityPage("add-recurring")}>+ הוסף</AddBtn>
      </PageHeader>

      {recurringTemplates.length === 0 ? (
        <Empty>
          <EmptyIcon>🔄</EmptyIcon>
          <EmptyText>אין הוראות קבע עדיין</EmptyText>
          <EmptyBtn onClick={() => setActivityPage("add-recurring")}>הוסף ראשונה</EmptyBtn>
        </Empty>
      ) : (
        <>
          {incomeTemplates.length > 0 && (
            <Section>
              <SectionTitle>הכנסות קבועות</SectionTitle>
              <Card>{renderList(incomeTemplates)}</Card>
            </Section>
          )}
          {expenseTemplates.length > 0 && (
            <Section>
              <SectionTitle>הוצאות קבועות</SectionTitle>
              <Card>{renderList(expenseTemplates)}</Card>
            </Section>
          )}
        </>
      )}
    </Page>
  );
}

export default Recurring;

const Page = styled.div`
  padding: 16px 16px 24px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const PageTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #f0f4ff;
`;

const AddBtn = styled.button`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #8b9dc3;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`;

const Card = styled.div`
  background: #161b27;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.05);
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.04);

  &:last-child {
    border-bottom: none;
  }
`;

const RowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Emoji = styled.div`
  font-size: 22px;
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const RowInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const RowTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #f0f4ff;
`;

const RowSub = styled.div`
  font-size: 12px;
  color: #8b9dc3;
`;

const RowRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`;

const Amount = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ $type }) => $type === "income" ? "#22d3a5" : "#f472b6"};
`;

const Actions = styled.div`
  display: flex;
  gap: 6px;
`;

const ActionBtn = styled.button`
  background: ${({ $danger }) => $danger ? "rgba(244,114,182,0.1)" : "rgba(99,102,241,0.1)"};
  color: ${({ $danger }) => $danger ? "#f472b6" : "#a5b4fc"};
  border: none;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 60px 20px;
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  opacity: 0.4;
`;

const EmptyText = styled.div`
  font-size: 16px;
  color: #8b9dc3;
  font-weight: 500;
`;

const EmptyBtn = styled.button`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
`;
