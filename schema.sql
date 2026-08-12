-- Produktų lentelė
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  old_price DECIMAL(10,2),
  description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  file_url TEXT NOT NULL,
  is_bestseller BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Užsakymų lentelė
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email VARCHAR(255) NOT NULL,
  product_id UUID REFERENCES products(id),
  amount DECIMAL(10,2) NOT NULL,
  payment_provider VARCHAR(50) NOT NULL, -- stripe, paypal, revolut
  payment_status VARCHAR(50) DEFAULT 'pending',
  download_token VARCHAR(255) UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
