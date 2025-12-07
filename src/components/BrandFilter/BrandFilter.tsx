import { getBrands } from '@/services';
import { clsx } from '@/lib/utils';
import styles from './BrandFilter.module.css';

async function BrandFilter() {
  const brandsResponse = await getBrands();

  if (!brandsResponse.success) {
    return null;
  }

  const brandOptions = [{ id: -1, name: 'All' }, ...brandsResponse.data];

  return (
    <>
      <h2 className={styles.title}>Бренд</h2>
      <ul className={styles.list} role="group" aria-label="Фильтр по бренду">
        {brandOptions.map(({ id, name: brand }) => (
          <li key={id}>
            <button
              className={clsx(
                styles.button,
                brand === 'All' && styles.buttonActive,
              )}
            >
              {brand}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export { BrandFilter };
