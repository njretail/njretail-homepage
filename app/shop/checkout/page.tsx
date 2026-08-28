import { Footer, Header } from "../../components/site-shell";
import CheckoutClient from "./checkout-client";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#C8075F]">Checkout</p>
          <h1 className="text-4xl font-bold leading-[1.25] tracking-tight text-slate-900 sm:text-5xl">주문/결제</h1>
        </section>

        <CheckoutClient />
      </main>
      <Footer />
    </>
  );
}
