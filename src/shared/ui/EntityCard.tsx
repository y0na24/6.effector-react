type EntityCardProps<T> = {
  id: number;
  useSelectById: (id: number) => T;
  render: (entity: T) => React.ReactNode;
};

export function EntityCard<T>({
  id,
  useSelectById,
  render,
}: EntityCardProps<T>) {
  const entity = useSelectById(id);
  return <>{render(entity)}</>;
}
