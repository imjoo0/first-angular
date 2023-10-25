import { Component } from "@angular/core";

@Component({
    selector: 'app-movies',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
    subTitle: string = "영화 리스트";
    imgWidth: number = 55;
    imgMargin: number = 2;
    isImgDisplayed: boolean = false;
    movies: any[] = [
        {
            "movieId":1,
            "name":"maxtrix4",
            "director":"aa",
            "releaseDate":"2022-01-10",
            "actor":"Keanu Reeves",
            "rate":4,
            "imageUrl":"assets/images/Matrix4.jpeg"
        },
        {
            "movieId":2,
            "name":"maxtrix3",
            "director":"aa",
            "releaseDate":"2022-01-10",
            "actor":"Keanu Reeves",
            "rate":4,
            "imageUrl":"assets/images/Matrix3.jpeg"
        },
        {
            "movieId":3,
            "name":"maxtrix2",
            "director":"aa",
            "releaseDate":"2022-01-10",
            "actor":"Keanu Reeves",
            "rate":4,
            "imageUrl":"assets/images/Matrix2.jpeg"
        },
        {
            "movieId":4,
            "name":"maxtrix1",
            "director":"aa",
            "releaseDate":"2022-01-10",
            "actor":"Keanu Reeves",
            "rate":4,
            "imageUrl":"assets/images/Matrix1.jpeg"
        }
    ];

    public toggleImg(): void{
        this.isImgDisplayed = !this.isImgDisplayed;
    }
}

