export type CartItem = { name: string; price: number; qty: number };

export function parsePrice(price: string): number {
  // convert strings like '₩1,490,000' to number 1490000
  const digits = price.replace(/[^0-9]/g, '');
  return digits ? parseInt(digits, 10) : 0;
}

export function addItemToCart(product: { name: string; price: string }) {
  const raw = localStorage.getItem('nj_cart');
  const arr: CartItem[] = raw ? JSON.parse(raw) : [];
  const price = parsePrice(product.price);
  const existIdx = arr.findIndex((p) => p.name === product.name);
  if (existIdx >= 0) {
    arr[existIdx].qty += 1;
  } else {
    arr.push({ name: product.name, price, qty: 1 });
  }
  localStorage.setItem('nj_cart', JSON.stringify(arr));
  window.dispatchEvent(new CustomEvent('njcart:update'));
}
