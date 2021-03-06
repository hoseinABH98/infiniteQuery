import Person, { IPerson } from 'components/Person';
import type { NextPage } from 'next';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';
import styles from 'styles/Home.module.css';

const fetchPeople = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const Home: NextPage = () => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery(
    'people',
    ({ pageParam = 'https://swapi.dev/api/people/' }) => fetchPeople(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {isLoading ? (
          <h4 className={styles.title}>loading...</h4>
        ) : (
          <InfiniteScroll
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={
              <h4 className={styles.title} style={{ color: '#1b4332' }}>
                Wating...
              </h4>
            }
          >
            <div className={styles.grid}>
              {data?.pages.map((pageData) => {
                return pageData.results.map(
                  ({ name, hair_color, eye_color }: IPerson) => (
                    <Person
                      key={`${name}_${hair_color}`}
                      name={name}
                      hair_color={hair_color}
                      eye_color={eye_color}
                    />
                  )
                );
              })}
            </div>
            {!hasNextPage && (
              <div className={styles.endMessageWrapper}>
                <span
                  className={styles.endMessage}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  👋 GoodBye
                </span>
              </div>
            )}
          </InfiniteScroll>
        )}
      </main>
    </div>
  );
};

export default Home;
