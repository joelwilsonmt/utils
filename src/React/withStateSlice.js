
function withStateSlice(Comp, slice, useAppState) {
    const MemoComp = React.memo(Comp)
    function Wrapper(props, ref) {
        const state = useAppState() // need to load app state here
        return <MemoComp ref={ref} state={slice(state, props)} {...props} />
    }
    Wrapper.displayName = `withStateSlice(${Comp.displayName || Comp.name})`
    return React.memo(React.forwardRef(Wrapper))
}

export default withStateSlice

/* use like:
const SlicedCell = withStateSlice(Cell, (state, {row, column}) => state.grid[row][column])
memoizes state component, etc.
*/