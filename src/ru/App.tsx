import { motion } from 'framer-motion';
import {
  Terminal,
  Zap,
  TrendingUp,
  Clock,
  AlertTriangle,
  BarChart3,
  Users,
  Lock,
  Github,
  BookOpen,
  Download,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Activity,
  Menu,
  X,
  FileText,
  Layers,
  Shield,
  RefreshCw,
} from 'lucide-react';
import { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-teal-50 text-gray-900">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <Statistics />
      <Manifesto />
      <DualCTA />
      <Footer />
    </div>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (lang: 'en' | 'ru') => {
    localStorage.setItem('language', lang);
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-emerald-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Terminal className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">Claude Code Starter</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Возможности
            </a>
            <a href="#case-study" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Кейс
            </a>
            <a href="#download" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Установка
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-1">
              <button
                onClick={() => switchLanguage('en')}
                className="px-3 py-1.5 rounded hover:bg-gray-100 font-medium text-2xl transition-all"
                aria-label="Переключить на английский"
              >
                🇺🇸
              </button>
              <button
                onClick={() => switchLanguage('ru')}
                className="px-3 py-1.5 rounded bg-emerald-100 border-2 border-emerald-500 font-medium text-2xl transition-all"
                aria-label="Переключить на русский"
              >
                🇷🇺
              </button>
            </div>

            <motion.a
              href="https://github.com/alexeykrol/claude-code-starter"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg whitespace-nowrap"
            >
              Скачать бесплатно
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-3">
            <div className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-1 mb-3">
              <button
                onClick={() => switchLanguage('en')}
                className="flex-1 px-3 py-2.5 rounded hover:bg-gray-100 font-medium text-3xl transition-all"
                aria-label="Switch to English"
              >
                🇺🇸
              </button>
              <button
                onClick={() => switchLanguage('ru')}
                className="flex-1 px-3 py-2.5 rounded bg-emerald-100 border-2 border-emerald-500 font-medium text-3xl transition-all"
                aria-label="Switch to Russian"
              >
                🇷🇺
              </button>
            </div>
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
            >
              Возможности
            </a>
            <a
              href="#case-study"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
            >
              Кейс
            </a>
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-colors"
            >
              Установка
            </a>
            <a
              href="https://github.com/alexeykrol/claude-code-starter"
              onClick={() => setIsOpen(false)}
              className="block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg text-center"
            >
              Скачать фреймворк
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold mb-6 leading-tight">
              <span className="block text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">
                Хватит объяснять контекст AI каждую сессию.
              </span>
              <span className="block text-4xl md:text-5xl text-red-600">
                Начните, наконец, разрабатывать продуктивно.
              </span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Превратите Claude Code в дисциплинированного партнёра по разработке. Автоматическая загрузка контекста,
              95% экономия токенов и строгие протоколы работы. Без ежемесячной платы. Open Source.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/alexeykrol/claude-code-starter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Установить за 15 минут
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="bg-emerald-50/80 backdrop-blur-sm rounded-lg p-6 border border-emerald-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Экономия времени</span>
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-600">30 ч/мес</div>
                </div>
                <div className="bg-emerald-50/80 backdrop-blur-sm rounded-lg p-6 border border-emerald-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Экономия токенов</span>
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-600">-95%</div>
                </div>
                <div className="bg-teal-50/80 backdrop-blur-sm rounded-lg p-6 border border-teal-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Старт сессии</span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-semibold text-emerald-600">&lt;30 сек</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    {
      icon: RefreshCw,
      title: 'Потеря контекста между сессиями',
      description:
        "Каждое утро 10-15 минут уходит на объяснение AI, что вы делаете, где что находится, какая архитектура. Claude забывает всё, что было вчера. Вы тратите время на повторения вместо работы.",
    },
    {
      icon: BarChart3,
      title: 'Расход токенов на сканирование',
      description:
        'Claude читает всё подряд: логи, кэш, node_modules, старые черновики. 50,000-100,000 токенов тратится на мусор. Вы платите за то, что AI изучает .git и .env файлы. Старт сессии занимает 1-2 минуты.',
    },
    {
      icon: AlertTriangle,
      title: 'Нет структуры — нет результата',
      description:
        "Без чётких протоколов Claude работает хаотично: забывает обновить документацию, коммитит credentials, не проверяет сборку. Вы получаете непредсказуемое качество и тратите время на откат изменений.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="block font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Ловушка масштабирования AI-разработки:
            </span>
            <span className="block font-bold text-red-600">
              Чем больше проект, тем хуже работает Claude Code.
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-8 shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all hover:bg-white flex flex-col justify-center min-h-[280px]"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-red-50/80 w-16 h-16 rounded-xl flex items-center justify-center border border-red-200/50">
                  <problem.icon className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{problem.title}</h3>
              <p className="text-xl text-slate-700 leading-relaxed text-center">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const solutions = [
    {
      icon: FileText,
      title: 'Контекст на автопилоте',
      description:
        'Настройте метафайлы один раз (SNAPSHOT.md, BACKLOG.md, ARCHITECTURE.md) — и Claude будет знать всё с первой секунды каждой сессии. Вместо сканирования 500+ файлов → читает 3 компактных метафайла. Старт сессии: <30 секунд вместо 1-2 минут. Экономия: 10-15 минут каждое утро.',
      image: 'left',
    },
    {
      icon: TrendingUp,
      title: 'Токен-экономия: 95% меньше расходов',
      description:
        'Умная загрузка контекста: 3,000 токенов вместо 100,000. Протоколы хранятся в отдельных файлах и читаются свежими (immune to context compaction). ON DEMAND контекст — ROADMAP и IDEAS читаются только когда нужно. Экономия: $50-100/месяц для активных проектов.',
      image: 'right',
    },
    {
      icon: Shield,
      title: 'Дисциплина через протоколы',
      description:
        'Cold Start Protocol: crash recovery, авто-обновление фреймворка, security cleanup. Completion Protocol: build check, обновление метафайлов, экспорт диалогов, security scan, COMMIT_POLICY проверка. Безопасность: credentials никогда не попадут в git. Предсказуемость: AI работает по чёткому алгоритму.',
      image: 'left',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">
              Решение: Claude Code Starter Framework
            </span>
            <span className="block text-red-600">
              Система управления AI-разработкой
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-50/80 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center border border-emerald-200/50 flex-shrink-0">
                    <solution.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed">{solution.description}</p>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-8 h-80 flex items-center justify-center shadow-xl">
                  <div className="text-white text-center">
                    <solution.icon className="w-32 h-32 mx-auto mb-4 opacity-30" />
                    <p className="text-2xl font-semibold opacity-70">{solution.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="case-study" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute top-0 left-0 text-9xl text-emerald-100 font-serif">"</div>
          <blockquote className="relative bg-white/80 backdrop-blur-sm border-2 border-red-500 rounded-xl p-12 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.15),0_8px_10px_-6px_rgba(0,0,0,0.15)]">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              У меня 5 активных проектов на Claude Code. Раньше каждое утро тратил 75 минут на объяснение AI контекста. После внедрения Claude Code Starter Framework старт занимает 30 секунд. Экономия: 30 часов в месяц, $120 на токенах, 0 случайных коммитов credentials. Качество документации выросло на 200%, скорость разработки +40%.
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-50/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-200/50">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">Алексей Крол</div>
                <div className="text-gray-600">Разработчик онлайн-школы AI, alexeykrol.com</div>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section id="roi" className="pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Сравните подходы к AI-разработке</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Три варианта управления контекстом для Claude Code.{' '}
            <span className="text-emerald-600 font-semibold">Один даёт вам свободу и экономию.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-xl p-8 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-red-600 mb-4">Ручные промпты</h4>
            <div className="space-y-3 text-gray-700">
              <p className="text-lg">❌ 10-15 мин каждая сессия</p>
              <p className="text-lg">❌ 50-100k токенов на старт</p>
              <p className="text-lg">❌ Забываете важные детали</p>
              <p className="text-lg">❌ Нет защиты от ошибок</p>
              <p className="text-lg">❌ Не масштабируется</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-xl p-8 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-orange-600 mb-4">Custom Scripts</h4>
            <div className="space-y-3 text-gray-700">
              <p className="text-lg">❌ 20-40 часов разработки</p>
              <p className="text-lg">❌ Нужно поддерживать</p>
              <p className="text-lg">❌ Каждый проект с нуля</p>
              <p className="text-lg">❌ Нет community</p>
              <p className="text-lg">❌ Время = деньги</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-50/90 to-teal-50/90 backdrop-blur-sm border-2 border-emerald-200/50 rounded-xl p-8 shadow-2xl"
          >
            <h4 className="text-2xl font-bold text-emerald-600 mb-4">Claude Code Starter</h4>
            <div className="space-y-3 text-gray-700">
              <p className="text-lg">✅ 15 минут установки</p>
              <p className="text-lg">✅ 95% экономия токенов</p>
              <p className="text-lg">✅ $0 стоимость (MIT License)</p>
              <p className="text-lg">✅ Авто-безопасность</p>
              <p className="text-lg">✅ Community-driven</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-xl p-6 text-center">
          <p className="text-2xl md:text-3xl font-bold text-emerald-600">
            ROI: Окупается за первую неделю использования
          </p>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm border-2 border-emerald-200/50 rounded-2xl p-10 shadow-2xl"
        >
          <Sparkles className="w-16 h-16 text-emerald-600 mx-auto mb-8" />
          <p className="text-3xl md:text-4xl font-bold leading-relaxed mb-6 text-gray-900">
            Я создал этот фреймворк, чтобы перестать терять время на повторения.
          </p>
          <div className="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed space-y-4">
            <p>.. что доказывает более важную мысль:</p>
            <p className="text-red-600 font-semibold">
              AI-разработка должна быть управляемой и предсказуемой, а не хаотичной.
            </p>
            <p>Вам нужны не только AI-инструменты, но и система управления ими.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DualCTA() {
  return (
    <section id="download" className="pt-5 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-emerald-100/50 rounded-2xl p-10 shadow-xl"
          >
            <Terminal className="w-12 h-12 text-gray-700 mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Нужен только фреймворк?</h3>
            <h4 className="text-2xl font-semibold text-emerald-600 mb-6">Установите Claude Code Starter</h4>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Идеально для разработчиков, которые хотят управлять AI-разработкой уже сегодня. Установка за 15 минут. Бесплатно, Open Source (MIT License).
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Новый проект:</h5>
                <code className="text-sm text-gray-700 block">curl -o init-project.sh [url] && bash init-project.sh</code>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Существующий проект:</h5>
                <code className="text-sm text-gray-700 block">/migrate-legacy</code>
              </div>
            </div>
            <motion.a
              href="https://github.com/alexeykrol/claude-code-starter"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white/80 backdrop-blur-sm hover:bg-emerald-50/80 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 border-2 border-emerald-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Скачать бесплатно
            </motion.a>
          </motion.div>

          <motion.div
            id="master"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-50/90 to-teal-50/90 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-10 shadow-xl"
          >
            <Sparkles className="w-12 h-12 text-emerald-600 mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Хотите научиться больше?</h3>
            <h4 className="text-2xl font-semibold text-emerald-600 mb-6">
              Курс: Создание ИИ агентов
            </h4>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Научитесь создавать автоматизации, полноценные приложения и мощных ИИ агентов. Перестаньте зависеть от
              ограничений убогих конструкторов.
            </p>
            <motion.a
              href="https://alexeykrol.com/courses/ai_full/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white/80 backdrop-blur-sm border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50/80 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              Посмотреть программу
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm border-t border-emerald-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-6 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 to-teal-700">Claude Code Starter Framework</span>
          </div>

          <a href="https://alexeykrol.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors underline">
            © Alex Krol, 2026
          </a>

          <a
            href="https://github.com/alexeykrol/claude-code-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors underline flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub / Документация
          </a>

          <div className="text-gray-700">
            Создано с <a href="https://alexeykrol.com/claudecodefree/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors underline">Vibe Coding</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
