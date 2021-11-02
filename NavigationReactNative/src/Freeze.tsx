/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2021 Software Mansion
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, { Suspense, useRef } from 'react';
import { requireNativeComponent, StyleSheet } from 'react-native';

var Suspender = ({freeze, children}) => {
    var promiseCache = useRef<any>({}).current;
    if (freeze && !promiseCache.promise) {
        promiseCache.promise = new Promise((res) => {
          promiseCache.resolve = res;
        });
        throw promiseCache.promise;
    } else if (freeze) {
        throw promiseCache.promise;
    } else if (promiseCache.promise) {
        promiseCache.resolve();
        promiseCache.promise = undefined;
    }
    return <NVFreeze style={styles.freeze}>{children}</NVFreeze>;
};

var Freeze = ({enabled, children}) => (
    <Suspense fallback={null}>
      <Suspender freeze={enabled}>{children}</Suspender>
    </Suspense>
);

var NVFreeze = requireNativeComponent<any>('NVFreeze', null);

const styles = StyleSheet.create({
    freeze: {
        flex: 1
    },
});

export default Freeze;

