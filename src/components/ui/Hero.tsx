interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function Hero({
  title,
  subtitle,
  buttonText,
  onButtonClick
}: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{subtitle}</p>
        <button
          onClick={onButtonClick}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}