export class BinaryClockUtils {

    static decimalNumberToBinary( num: number ): number[] {
        let binaries: number[] = [];
        while( num > 1 ) {
            let half = num/2;
            let expTwo = Math.pow( 2, Math.ceil( Math.log2(half) ) );
            let toPush = half === expTwo ? num : expTwo;
            binaries.push( toPush );
            num = num - toPush;
        }
        if( num === 1 ) {
            binaries.push(1);
        }
        return binaries;
    }

}