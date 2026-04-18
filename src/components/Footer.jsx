export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 border-t border-green-500/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-gray-500">
          <span className="text-green-500/50">&lt;</span>
          Desenvolvido por{' '}
          <span className="text-green-400">Romão Quilamiquiza</span> &copy;{' '}
          {year}
          <span className="text-green-500/50">/&gt;</span>
        </p>
        <p className="font-mono text-xs text-gray-600 mt-2">
          Feito com <i className="fas fa-heart text-green-500/50" /> e muito{' '}
          <i className="fas fa-mug-hot text-green-500/50" />
        </p>
      </div>
    </footer>
  )
}
