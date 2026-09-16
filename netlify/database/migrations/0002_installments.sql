ALTER TABLE transactions
  ADD COLUMN IF NOT EXISTS installment_id    TEXT,
  ADD COLUMN IF NOT EXISTS installment_index INTEGER,
  ADD COLUMN IF NOT EXISTS installment_total INTEGER;
