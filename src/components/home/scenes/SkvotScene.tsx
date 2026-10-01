import { Check, Hourglass } from 'lucide-react';
import { CardScene } from '@/components/home/scenes/CardScene';
import { EASE, timeline, type Key, type Pose } from '@/components/home/scenes/timeline';
import type { Project } from '@/lib/projects';

// Skvot: the week's roadmap up close, a tap on the task with a deadline, the task rises with
// its Lecture / Homework switch, the camera closes in on "Extend deadline", and the timer
// gains a day. Same beats and easings as the Safey loop.

const T = timeline('sk', 9.6);
const RESET = 8.12;
const back = (pose: Pose): Key => [RESET + 0.01, pose];

const road = T.layer({ s: 1.5, y: 40 }, [
  [0.9, {}],
  [1.45, { s: 1.62 }, EASE.camera],
  [1.75, { o: 0 }, EASE.fade],
  [RESET, { s: 1.35, y: 40 }],
  [8.95, { o: 1, s: 1.5 }, EASE.rise],
]);
const rowPress = T.layer({}, [[1.0, {}], [1.18, { s: 0.97 }, EASE.press], [1.4, { s: 1 }, EASE.press]]);
const rowHint = T.layer({ o: 0 }, [[1.0, {}], [1.15, { o: 1 }, EASE.fade], [1.6, {}], [1.75, { o: 0 }, EASE.fade]]);

const task = T.layer({ o: 0, s: 1.3, y: 60 }, [
  [1.6, {}],
  [2.4, { o: 1, y: 20 }, EASE.rise],
  [5.5, {}],
  [6.1, { s: 1.75, y: -170 }, EASE.zoom],
  [7.7, {}],
  [8.05, { o: 0 }, EASE.fade],
  back({ o: 0, s: 1.3, y: 60 }),
]);
const rise = (at: number, from = 32) =>
  T.layer({ o: 0, y: from }, [[at, {}], [at + 0.7, { o: 1, y: 0 }, EASE.rise], [RESET, {}], back({ o: 0, y: from })]);
const head = rise(1.75, 24);
const titleIn = rise(1.9);
const segIn = rise(2.05);
const bodyIn = rise(2.2);
const buttonIn = rise(2.35, 24);

// The switch slides from Lecture to Homework, like the Monthly / Yearly toggle on Safey
const thumb = T.layer({}, [[3.25, {}], [3.55, { x: 199 }, EASE.toggle], [RESET, {}], back({ x: 0 })]);
const segPress = T.layer({}, [[3.12, {}], [3.28, { s: 0.98 }, EASE.press], [3.45, { s: 1 }, EASE.press]]);
const lectureText = T.layer({}, [[3.3, {}], [3.5, { o: 0 }, EASE.fade], [RESET, {}], back({ o: 1 })]);
const homeworkText = T.layer({ o: 0 }, [[3.32, {}], [3.55, { o: 1 }, EASE.fade], [RESET, {}], back({ o: 0 })]);

const press = T.layer({}, [[6.3, {}], [6.47, { s: 0.95 }, EASE.press], [6.66, { s: 1 }, EASE.press]]);
const btnOut = T.layer({}, [[6.56, {}], [6.76, { o: 0, y: -10 }, EASE.fade], [RESET, {}], back({ o: 1, y: 0 })]);
const btnIn = T.layer({ o: 0, y: 10 }, [[6.66, {}], [6.92, { o: 1, y: 0 }, EASE.fade], [RESET, {}], back({ o: 0, y: 10 })]);
const timerOut = T.layer({}, [[6.8, {}], [7.0, { o: 0, y: -8 }, EASE.fade], [RESET, {}], back({ o: 1, y: 0 })]);
const timerIn = T.layer({ o: 0, y: 8 }, [[6.9, {}], [7.12, { o: 1, y: 0 }, EASE.fade], [RESET, {}], back({ o: 0, y: 8 })]);

const ROWS = [
  { title: '66/ Підготовка до брифінгу з реальним клієнтом', kind: 'Дедлайн', time: '08:13:23', deadline: true },
  { title: '67/ Онлайн-зустріч з клієнтом', kind: 'Лекція', time: '19:30 · 04.04' },
  { title: '68/ Фідбек-сесія', kind: 'Лекція', time: '19:30 · 09.04' },
];

export function SkvotScene({ project, label }: { project: Project; label: string }) {
  return (
    <CardScene label={label} stage={project.stage} css={T.css()} className="scs">
      <div className="scs-panel scs-road" style={road}>
        <p className="scs-h">Роадмап тижня</p>
        <div className="scs-chips">
          <span className="is-on">Всі</span>
          <span>UX/UI Designer</span>
          <span>System Game Designer</span>
        </div>
        <p className="scs-group">UX/UI Designer</p>
        <ul className="scs-rows">
          {ROWS.map((row) => (
            <li key={row.title} style={row.deadline ? rowPress : undefined}>
              {row.deadline && <span className="scs-row-hint" style={rowHint} />}
              <span className="scs-row-title">
                {row.title}
                <small className={row.deadline ? 'is-red' : undefined}>{row.kind}</small>
              </span>
              <span className={`scs-row-time${row.deadline ? ' is-red' : ''}`}>{row.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="scs-panel scs-task" style={task}>
        <div className="scs-task-top" style={head}>
          <span className="scs-back">←</span>
          <span className="scs-timer">
            <Hourglass size={15} strokeWidth={2} />
            <span className="scs-timer-val">
              <span style={timerOut}>08:13:20</span>
              <span className="is-new" style={timerIn}>32:13:20</span>
            </span>
          </span>
        </div>
        <p className="scs-task-title" style={titleIn}>
          66/ Підготовка до брифінгу з реальним клієнтом
        </p>
        <div style={segIn}>
          <div className="scs-seg" style={segPress}>
            <span className="scs-seg-thumb" style={thumb} />
            <span className="scs-seg-a">
              <span className="scs-seg-dim">Лекція</span>
              <span className="scs-seg-strong" style={lectureText}>
                Лекція
              </span>
            </span>
            <span className="scs-seg-b">
              <span className="scs-seg-dim">Домашка</span>
              <span className="scs-seg-strong" style={homeworkText}>
                Домашка
              </span>
            </span>
          </div>
        </div>
        <div className="scs-body" style={bodyIn}>
          <p>
            <b>Привіт!</b> Твоє наступне домашнє завдання: підготувати питання для брифінгу з реальним клієнтом.
          </p>
          <p>
            <b>Для цього потрібно:</b>
            <br />— Ознайомитись з брифом
            <br />— Підготувати запитання до зустрічі з клієнтом
          </p>
        </div>
        <div style={buttonIn}>
          <span className="scs-btn" style={press}>
            <span style={btnOut}>Продовжити дедлайн</span>
            <span className="scs-btn-done" style={btnIn}>
              <Check size={16} strokeWidth={3} />
              Дедлайн +24 години
            </span>
          </span>
        </div>
      </div>
    </CardScene>
  );
}
