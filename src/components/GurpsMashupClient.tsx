import { useCallback, useEffect, useMemo, useState, type ChangeEvent } from "react";

import styles from "./GurpsMashupClient.module.scss";

interface GurpsMashupProps {
  books: any[]
}

function randomValue(maxValue: number) {
  return Math.floor(Math.random() * maxValue);
}

function randomElements(maxValue: number, count: number): number[] {
  const values = new Set<number>();
  while (values.size < count) {
    values.add(randomValue(maxValue));
  }
  return [...values.values()]
}

function GurpsMashupBook(props: any) {
  const { book } = props;

  const imageSource = useMemo(() => `${book.data.url}img/cover_sm.jpg`, [book.data.url]);

  return (
    <div className={styles.book}>
      <img className={styles.bookimage} src={imageSource} />
      <p className={styles.booktext}>
        <a href={book.data.url} target="_blank">
          {book.id}
        </a>
      </p>
    </div>
  )
}

export default function GurpsMashupClient(props: GurpsMashupProps) {
  const { books } = props;

  const [bookCount, setBookCount] = useState<number>(2);
  const [selectedBookIds, setSelectedBookIds] = useState<number[]>([]);

  useEffect(() => {
    setSelectedBookIds(randomElements(books.length, bookCount))
  }, [bookCount, setBookCount])

  const onRefreshClicked = useCallback(() => 
    setSelectedBookIds(randomElements(books.length, bookCount)),
    [books, bookCount]
  )
 
  const onBookCountChanged = useCallback((e: ChangeEvent<HTMLSelectElement>) => 
    setBookCount(parseInt(e.target.value)),
    [setBookCount]
  )

  return (
    <div className={styles.gmgrid}>
      <div>
        <button onClick={onRefreshClicked}>Refresh</button>
        <select value={bookCount} onChange={onBookCountChanged}>
          <option value={2}>2 Books</option>
          <option value={3}>3 Books</option>
          <option value={4}>4 Books</option>
        </select>
      </div>
      {selectedBookIds.map(i =>
        <div>
          <GurpsMashupBook book={books[i]} />
        </div>
      )}
    </div>
  )
}
