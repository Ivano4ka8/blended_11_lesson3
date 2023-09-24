import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByRegion } from 'hooks/useFetchByRegion';

export const CountrySearch = () => {
  const { countries, isLoading, error, handleSubmit } = useFetchByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {error && <Heading textAlign="center">Something went wrong!!!</Heading>}

        {isLoading && <Loader />}

        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
