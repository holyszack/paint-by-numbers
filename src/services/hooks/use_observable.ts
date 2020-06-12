import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(value$: Observable<T>) => {
    const [value, setValue] = useState<T>(undefined as unknown as T);

    useEffect(() => {
        const subscription = value$.subscribe(setValue);
        return () => {
            subscription.unsubscribe();
        };
    }, [setValue, value$]);
    return value;
};
