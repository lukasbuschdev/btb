export type typeChapter = {
    name: string;
    tasks: typeTask[]; 
}

export type typeTask = {
    id: string;
    category: string;
    testCases: typeTestCase[];
    text: string;
    function: string;
}

export type typeTestCase = {
    case: string;
}