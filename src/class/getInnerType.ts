type GetStoreType<S> = S extends Store<infer T> ? T : never;
type GetStateType<C> = C extends CombinedState<infer T> ? T : never;

type StoreStype = GetStateType<GetStoreType<ReturnType<typeof initStore>>>;
type TestAppWithPathParam = {
  path: string;
  mockStore?: Partial<StoreStype>;
};
