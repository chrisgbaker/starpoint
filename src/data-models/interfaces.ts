interface Action<P, S> {
  type: P;
  payload: S;
  error?: boolean;
  meta?: any;
}

export default Action;
